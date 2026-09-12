> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kcttabcolumnterminatorsattributename](https://developer.apple.com/documentation/coretext/kcttabcolumnterminatorsattributename)

# kCTTabColumnTerminatorsAttributeName (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies the terminating character for a tab column.

## Declaration

```swift
let kCTTabColumnTerminatorsAttributeName: CFString
```

<a id="Discussion"></a>

## Discussion

The value associated with this attribute is a [CFCharacterSet](../corefoundation/cfcharacterset.md) object. The character set is used to determine the terminating character for a tab column. The tab and newline characters are implied even if they don’t exist in the character set. This attribute can be used to implement decimal tabs, for instance. This attribute is optional.

## See Also

### Creating Text Tabs

- [CTTextTabCreate(\_:\_:\_:)](cttexttabcreate%28______%29.md): Creates and initializes a new text tab object.

# kCTTabColumnTerminatorsAttributeName (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies the terminating character for a tab column.

## Declaration

```objectivec
extern CFStringRef const kCTTabColumnTerminatorsAttributeName;
```

<a id="Discussion"></a>

## Discussion

The value associated with this attribute is a [CFCharacterSetRef](../corefoundation/cfcharacterset.md) object. The character set is used to determine the terminating character for a tab column. The tab and newline characters are implied even if they don’t exist in the character set. This attribute can be used to implement decimal tabs, for instance. This attribute is optional.

## See Also

### Creating Text Tabs

- [CTTextTabCreate](cttexttabcreate%28______%29.md): Creates and initializes a new text tab object.
