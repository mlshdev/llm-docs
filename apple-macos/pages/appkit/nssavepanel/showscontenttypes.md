> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/showscontenttypes](https://developer.apple.com/documentation/appkit/nssavepanel/showscontenttypes)

# showsContentTypes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

Whether or not to show a popup list for selecting the type of the saved file.

## Declaration

```swift
var showsContentTypes: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The popup list shows the localized description for the types in `allowedContentTypes`. To display a different description, implement the delegate method `-panel:displayNameForType:`. The default value is `NO`, do not show the content types.

- Note: If `allowedContentTypes` is empty, the control is not displayed.

# showsContentTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

Whether or not to show a popup list for selecting the type of the saved file.

## Declaration

```objectivec
@property BOOL showsContentTypes;
```

<a id="discussion"></a>

## Discussion

The popup list shows the localized description for the types in `allowedContentTypes`. To display a different description, implement the delegate method `-panel:displayNameForType:`. The default value is `NO`, do not show the content types.

- Note: If `allowedContentTypes` is empty, the control is not displayed.
