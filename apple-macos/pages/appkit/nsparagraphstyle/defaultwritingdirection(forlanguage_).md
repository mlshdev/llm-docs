> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsparagraphstyle/defaultwritingdirection(forlanguage:)](https://developer.apple.com/documentation/appkit/nsparagraphstyle/defaultwritingdirection(forlanguage:))

# defaultWritingDirection(forLanguage:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+

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

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+

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
