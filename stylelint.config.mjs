/** @type {import("stylelint").Config} */
/** "extends": ["stylelint-config-standard"] */

export default {
  "extends": [],
  "plugins": [],
  "rules": {
    // Report unknown/misspelled properties
    "property-no-unknown": [true, {
      "ignoreProperties": [] 
    }],

    // Disable most other style rules so only property-name errors appear
    "block-no-empty": null,
    "color-no-invalid-hex": null,
    "declaration-block-no-duplicate-properties": null,
    "declaration-block-no-shorthand-property-overrides": null,
    "font-family-no-duplicate-names": null,
    "function-calc-no-unspaced-operator": null,
    "function-linear-gradient-no-nonstandard-direction": null,
    "keyframe-declaration-no-important": null,
    "media-feature-name-no-unknown": null,
    "no-empty-source": null,
    "no-descending-specificity": null,
    "rule-empty-line-before": null,
    "selector-pseudo-class-no-unknown": null,
    "selector-pseudo-element-no-unknown": null,
    "selector-type-no-unknown": null,
    "string-no-newline": null,
    "unit-no-unknown": null
  }
};
