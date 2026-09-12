> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsplaceholders](https://developer.apple.com/documentation/appkit/nsplaceholders)

# NSPlaceholders (Swift)

**Framework:** AppKit

A set of methods that an object can implement to register default placeholders to be displayed for a binding, when no other placeholder is specified.

<a id="overview"></a>

## Overview

Individual placeholder values can be specified for each of the marker objects (described in [Selection Markers](selection-markers.md)), as well as when the property is `nil`.

Placeholders are used when a property of an instance of the receiving class is accessed through a key value coding compliant method, and returns `nil` or a specialized marker.

## Topics

### Managing default placeholders

- [setDefaultPlaceholder(\_:for:with:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/setdefaultplaceholder%28_:for:with:%29): Deprecated. Sets `placeholder` as the default placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.
- [defaultPlaceholder(for:with:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/defaultplaceholder%28for:with:%29): Deprecated. Returns an object that will be used as the placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.

### Constants

- [Selection Markers](selection-markers.md): The following constants are used to describe special cases for a controller’s selection.

## See Also

### Data Placeholders

- [NSBindingSelectionMarker](nsbindingselectionmarker.md)

# NSPlaceholders (Objective-C)

**Framework:** AppKit

A set of methods that an object can implement to register default placeholders to be displayed for a binding, when no other placeholder is specified.

<a id="overview"></a>

## Overview

Individual placeholder values can be specified for each of the marker objects (described in [Selection Markers](selection-markers.md)), as well as when the property is `nil`.

Placeholders are used when a property of an instance of the receiving class is accessed through a key value coding compliant method, and returns `nil` or a specialized marker.

## Topics

### Managing default placeholders

- [setDefaultPlaceholder:forMarker:withBinding:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/setdefaultplaceholder%28_:for:with:%29): Deprecated. Sets `placeholder` as the default placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.
- [defaultPlaceholderForMarker:withBinding:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/defaultplaceholder%28for:with:%29): Deprecated. Returns an object that will be used as the placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.

### Constants

- [Selection Markers](selection-markers.md): The following constants are used to describe special cases for a controller’s selection.

## See Also

### Data Placeholders

- [NSBindingSelectionMarker](nsbindingselectionmarker.md)
