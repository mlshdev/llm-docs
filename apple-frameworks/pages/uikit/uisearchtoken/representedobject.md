> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchtoken/representedobject](https://developer.apple.com/documentation/uikit/uisearchtoken/representedobject)

# representedObject (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The object represented by the search token.

## Declaration

```swift
var representedObject: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to keep information required to restore a search from state restoration, paste a search token, or perform the user’s search.

## See Also

### Creating a search token

- [init(icon:text:)](init%28icon_text_%29.md): Creates a search token with the specified text and icon (if any).

# representedObject (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The object represented by the search token.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id representedObject;
```

<a id="Discussion"></a>

## Discussion

Use this property to keep information required to restore a search from state restoration, paste a search token, or perform the user’s search.

## See Also

### Creating a search token

- [tokenWithIcon:text:](init%28icon_text_%29.md): Creates a search token with the specified text and icon (if any).
