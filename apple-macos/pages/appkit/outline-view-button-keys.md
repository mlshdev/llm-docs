> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/outline-view-button-keys](https://developer.apple.com/documentation/appkit/outline-view-button-keys)

# Outline View Button Keys (Swift)

**Framework:** AppKit  
**Kind:** API Collection

These keys are used by the outline view to create disclosure buttons that collapse and expand items.

<a id="overview"></a>

## Overview

The outline view creates these buttons by calling its inherited [makeView(withIdentifier:owner:)](nstableview/makeview%28withidentifier_owner_%29.md) method, passing in the key as the identifier and the delegate as the owner.

> **Note**

>  These keys are backwards compatible to OS X v10.7, however, the symbol is not exported prior to v10.9 and the string value (`@"NSOutlineViewDisclosureButtonKey"`) must be used.

## Topics

### Constants

- [disclosureButtonIdentifier](nsoutlineview/disclosurebuttonidentifier.md): The normal triangle disclosure button.
- [showHideButtonIdentifier](nsoutlineview/showhidebuttonidentifier.md): The Show/Hide button.

## See Also

### Constants

- [Drop on Item Index](drop-on-item-index.md): This constant defines an index that allows you to drop an item directly on a target.

# Outline View Button Keys (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

These keys are used by the outline view to create disclosure buttons that collapse and expand items.

<a id="overview"></a>

## Overview

The outline view creates these buttons by calling its inherited [makeViewWithIdentifier:owner:](nstableview/makeview%28withidentifier_owner_%29.md) method, passing in the key as the identifier and the delegate as the owner.

> **Note**

>  These keys are backwards compatible to OS X v10.7, however, the symbol is not exported prior to v10.9 and the string value (`@"NSOutlineViewDisclosureButtonKey"`) must be used.

## Topics

### Constants

- [NSOutlineViewDisclosureButtonKey](nsoutlineview/disclosurebuttonidentifier.md): The normal triangle disclosure button.
- [NSOutlineViewShowHideButtonKey](nsoutlineview/showhidebuttonidentifier.md): The Show/Hide button.

## See Also

### Constants

- [Drop on Item Index](drop-on-item-index.md): This constant defines an index that allows you to drop an item directly on a target.
