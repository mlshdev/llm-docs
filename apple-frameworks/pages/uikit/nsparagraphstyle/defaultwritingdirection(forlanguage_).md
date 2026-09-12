> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsparagraphstyle/defaultwritingdirection(forlanguage:)](https://developer.apple.com/documentation/uikit/nsparagraphstyle/defaultwritingdirection(forlanguage:))

# defaultWritingDirection(forLanguage:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the default writing direction for the specified language.

## Declaration

```swift
class func defaultWritingDirection(forLanguage languageName: String?) -> NSWritingDirection
```

## Parameters

- `languageName`: The language specified in ISO language region format. Can be `nil` to return a default writing direction derived from the user’s defaults database.

<a id="return-value"></a>

## Return Value

The default writing direction.

## See Also

### Determining writing direction

- [baseWritingDirection](basewritingdirection.md): The base writing direction for the paragraph.
- [NSWritingDirection](../nswritingdirection.md): Constants that specify the writing direction.

# defaultWritingDirectionForLanguage: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the default writing direction for the specified language.

## Declaration

```objectivec
+ (NSWritingDirection) defaultWritingDirectionForLanguage:(NSString *) languageName;
```

## Parameters

- `languageName`: The language specified in ISO language region format. Can be `nil` to return a default writing direction derived from the user’s defaults database.

<a id="return-value"></a>

## Return Value

The default writing direction.

## See Also

### Determining writing direction

- [baseWritingDirection](basewritingdirection.md): The base writing direction for the paragraph.
- [NSWritingDirection](../nswritingdirection.md): Constants that specify the writing direction.
