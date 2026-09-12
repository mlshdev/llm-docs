> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/carbon_core/unicode_utilities/1390568-key_translation_options_mask](https://developer.apple.com/documentation/coreservices/carbon_core/unicode_utilities/1390568-key_translation_options_mask)

# Key Translation Options Mask

**Framework:** Core Services

Specifies the mask for the bit that controls dead-key processing state.

<a id="overview"></a>

## Overview

This constant is the currently defined mask for the `keyTranslateOptions` parameter of the function [UCKeyTranslate(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../../1390584-uckeytranslate.md).

## Topics

### Constants

- [kUCKeyTranslateNoDeadKeysMask](../../kuckeytranslatenodeadkeysmask.md): The mask for the bit that turns off dead-key processing. This prevents setting any new dead-key states, but allows completion of any dead-key states currently in effect.
