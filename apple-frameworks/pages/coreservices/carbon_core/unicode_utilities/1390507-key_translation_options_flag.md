> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/carbon_core/unicode_utilities/1390507-key_translation_options_flag](https://developer.apple.com/documentation/coreservices/carbon_core/unicode_utilities/1390507-key_translation_options_flag)

# Key Translation Options Flag

**Framework:** Core Services

Indicates the dead-key processing state.

<a id="overview"></a>

## Overview

Theis constant is the currently defined bit assignment for the `keyTranslateOptions` parameter of the function [UCKeyTranslate(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../../1390584-uckeytranslate.md).

## Topics

### Constants

- [kUCKeyTranslateNoDeadKeysBit](../../kuckeytranslatenodeadkeysbit.md): The bit number of the bit that turns off dead-key processing. This prevents setting any new dead-key states, but allows completion of any dead-key states currently in effect.
