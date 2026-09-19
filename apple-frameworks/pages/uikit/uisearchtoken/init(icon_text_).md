> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisearchtoken/init(icon:text:)

# init(icon:text:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a search token with the specified text and icon (if any).

## Declaration

```swift
init(icon: UIImage?, text: String)
```

## Parameters

- `icon`: An image to display with the text.
- `text`: The text to display on the search token.

<a id="return-value"></a>

## Return Value

A new search token.

## See Also

### Creating a search token

- [representedObject](representedobject.md): The object represented by the search token.

# tokenWithIcon:text: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a search token with the specified text and icon (if any).

## Declaration

```objectivec
+ (UISearchToken *) tokenWithIcon:(UIImage *) icon text:(NSString *) text;
```

## Parameters

- `icon`: An image to display with the text.
- `text`: The text to display on the search token.

<a id="return-value"></a>

## Return Value

A new search token.

## See Also

### Creating a search token

- [representedObject](representedobject.md): The object represented by the search token.
