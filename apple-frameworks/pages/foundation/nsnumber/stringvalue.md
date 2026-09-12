> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnumber/stringvalue](https://developer.apple.com/documentation/foundation/nsnumber/stringvalue)

# stringValue (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number object’s value expressed as a human-readable string.

## Declaration

```swift
var stringValue: String { get }
```

<a id="Discussion"></a>

## Discussion

The string is created by invoking [description(withLocale:)](description%28withlocale_%29.md) where locale is `nil`.

## See Also

### Retrieving String Representations

- [description(withLocale:)](description%28withlocale_%29.md): Returns a string that represents the contents of the number object for a given locale.

# stringValue (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number object’s value expressed as a human-readable string.

## Declaration

```objectivec
@property (copy, readonly) NSString * stringValue;
```

<a id="Discussion"></a>

## Discussion

The string is created by invoking [descriptionWithLocale:](description%28withlocale_%29.md) where locale is `nil`.

## See Also

### Retrieving String Representations

- [descriptionWithLocale:](description%28withlocale_%29.md): Returns a string that represents the contents of the number object for a given locale.
