> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/accessibilitydescription](https://developer.apple.com/documentation/appkit/nsimage/accessibilitydescription)

# accessibilityDescription (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The image’s accessibility description.

## Declaration

```swift
var accessibilityDescription: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This description is used automatically by interface elements that display images.  Like all accessibility descriptions, use a short localized string that does not include the name of the interface element.  For instance, “delete” rather than “delete button”.

# accessibilityDescription (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The image’s accessibility description.

## Declaration

```objectivec
@property (copy, nullable) NSString * accessibilityDescription;
```

<a id="Discussion"></a>

## Discussion

This description is used automatically by interface elements that display images.  Like all accessibility descriptions, use a short localized string that does not include the name of the interface element.  For instance, “delete” rather than “delete button”.
