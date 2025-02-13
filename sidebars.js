module.exports = {
  Software: {
    Software: [
      "software/overview",
      {
        "Meshtastic device": [
          "software/device/device-firmware",
          "software/device/device-channels",
          "software/device/device-remote-admin",
          "software/device/remote-hardware-service",
          "software/device/device-wifi",
          "software/device/device-power",
          "software/device/critical-error-codes",
          "software/device/ham",
        ],
      },
      {
        "Meshtastic Android": [
          "software/android/android-installation",
          "software/android/android-usage",
          "software/android/location-access",
        ],
      },
      {
        "Meshtastic iOS": ["software/ios/ios-development"],
      },
      {
        "Meshtastic.js": [
          "software/js/getting-started",
          "software/js/connecting",
          "software/js/events",
          "software/js/http-api",
          {
            type: "link",
            label: "API Docs",
            href: "https://js.meshtastic.org",
          },
        ],
      },
      {
        "Meshtastic-python": [
          "software/python/python-installation",
          "software/python/python-standalone",
          "software/python/python-cli",
          "software/python/python-uses",
          "software/python/python-stream",
          {
            type: "link",
            label: "API Docs",
            href: "https://python.meshtastic.org/",
          },
        ],
      },
      {
        Plugins: [
          "software/plugins/plugins",
          "software/plugins/range-test-plugin",
          "software/plugins/ext-notif-plugin",
          "software/plugins/canned-message-plugin",
          "software/plugins/serial-plugin",
          "software/plugins/store-forward-plugin",
          "software/plugins/environment-plugin",
        ],
      },
      {
        "Web interface": [
          "software/web/web-app-software",
          "software/web/web-config-software",
          "software/web/web-usage-software",
          "software/web/web-partitions-software",
          "software/web/web-development-software",
        ],
      },
      {
        "Community projects": [
          "software/community/community-overview",
          "software/community/community-atak",
          "software/community/community-pygui",
          "software/community/community-go",
        ],
      },
      {
        Other: [
          "software/other/sw-design",
          "software/other/remote-hardware-service",
          "software/other/rak815",
          "software/other/power",
          "software/other/pinetab",
          "software/other/nrf52-TODO",
          "software/other/mqtt",
          "software/other/install-OSX",
          "software/other/esp32-arduino-build",
          "software/other/build-instructions",
          "software/other/ant",
        ],
      },
    ],
    "Additional Documentation": [
      {type: "ref", id: "getting-started/overview"},
      {type: "ref", id: "software/settings/overview"},
      {type: "ref", id: "hardware/overview"},
      {type: "ref", id: "developers/overview"},
      {type: "ref", id: "about-documentation/overview"},
      {type: "ref", id: "legal/overview"},
    ],
  },
  Configuration: {
    "Getting Started": [
      "getting-started/overview",
      "getting-started/faq",
      {
        "Flashing firmware": [
          "getting-started/meshtastic-flasher",
          {
            "Manual Method": [
              "getting-started/flashing-esp32",
              "getting-started/flashing-nrf52",
            ],
          },
        ],
      },
      {
        "Connect to Device": [
          "getting-started/clients",
        ],
      },
      "getting-started/concepts",
    ],

    "Device Settings": [
      "software/settings/overview",
      "software/settings/channel",
      "software/settings/gps",
      "software/settings/ham",
      "software/settings/mqtt",
      "software/settings/power",
      "software/settings/router",
      "software/settings/wifi",
      {
        Plugins: [
          "software/settings/canned-message-plugin",
          "software/settings/environmental-measurement-plugin",
          "software/settings/external-notification-plugin",
          "software/settings/range-test-plugin",
          "software/settings/rotary-encoder-plugin",
          "software/settings/serial-plugin",
          "software/settings/store-and-forward-plugin",
        ],
        Advanced: [
          "software/settings/channel-advanced",
          "software/settings/misc",
        ],
      },
    ],
    "Additional Documentation": [
      {type: "ref", id: "hardware/overview"},
      {type: "ref", id: "software/overview"},
      {type: "ref", id: "developers/overview"},
      {type: "ref", id: "about-documentation/overview"},
      {type: "ref", id: "legal/overview"},
    ],
  },
  Hardware: {
    Hardware: [
      "hardware/overview",
      {
        "Supported Hardware": [
          "hardware/supported/tbeam",
          "hardware/supported/lora",
          "hardware/supported/heltec",
          "hardware/supported/techo",
          "hardware/supported/wisBlock",
          "hardware/supported/linux",
        ],
      },
      "hardware/buttons",
      "hardware/battery",
      {
        Antennas: [
          "hardware/antenna/antenna",
          "hardware/antenna/aerials",
          "hardware/antenna/non-aerial",
          "hardware/antenna/antenna-testing",
          "hardware/antenna/resources",
        ],
      },
    ],
    "Additional Documentation": [
      {type: "ref", id: "getting-started/overview"},
      {type: "ref", id: "software/settings/overview"},
      {type: "ref", id: "software/overview"},
      {type: "ref", id: "developers/overview"},
      {type: "ref", id: "about-documentation/overview"},
      {type: "ref", id: "legal/overview"},
    ],
  },
  Contribute: {
    Developers: [
      "developers/overview",
      {
        Protobufs: ["developers/protobufs/api"],
      },
      "developers/api",
      "developers/build-env",
      "developers/publish",
      "developers/codespaces",
      {
        Device: [
          "developers/device/device-api",
          "developers/device/radio-settings",
          "developers/device/mesh-alg",
          "developers/device/encryption",
          "developers/device/portnum",
          "developers/device/plugin-api",
          "developers/device/http-api",
          "developers/device/documents",
        ],
      },
      {
        "Android App": [
          "developers/android/build-app",
          "developers/android/mapbox",
        ],
      },
    ],
    "Maintaining Documentation": [
      "about-documentation/overview",
      {
        Dependencies: [
          "about-documentation/docusaurus",
          "about-documentation/github",
          "about-documentation/vercel",
        ],
      },
      {
        Examples: [
          "about-documentation/serve-docs-locally",
        ],
      },
      {
        "Style Guides": [
          "about-documentation/style-guides/style-guide-settings",
        ],
      },
    ],
    "Additional Documentation": [
      {type: "ref", id: "getting-started/overview"},
      {type: "ref", id: "software/settings/overview"},
      {type: "ref", id: "hardware/overview"},
      {type: "ref", id: "software/overview"},
      {type: "ref", id: "legal/overview"},
    ],
  },
  Legal: {
    Legal: [
      "legal/overview",
      "legal/licensing",
      "legal/trademark",
      "legal/privacy",
    ],
    "Additional Documentation": [
      {type: "ref", id: "getting-started/overview"},
      {type: "ref", id: "software/settings/overview"},
      {type: "ref", id: "hardware/overview"},
      {type: "ref", id: "software/overview"},
      {type: "ref", id: "developers/overview"},
    ],
  },
};
