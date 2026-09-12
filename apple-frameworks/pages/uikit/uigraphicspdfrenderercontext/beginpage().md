> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicspdfrenderercontext/beginpage()](https://developer.apple.com/documentation/uikit/uigraphicspdfrenderercontext/beginpage())

# beginPage() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Marks the beginning of a new page in the PDF context and configures it using default values.

## Declaration

```swift
func beginPage()
```

<a id="Discussion"></a>

## Discussion

This function ends any previous page before beginning a new one. It sets the bounds of the new page to the bounds rectangle you supplied when you created the PDF renderer.

## See Also

### Marking new pages

- [beginPage(withBounds:pageInfo:)](beginpage%28withbounds_pageinfo_%29.md): Marks the beginning of a new page in the PDF context and configures it using the specified values.

# beginPage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Marks the beginning of a new page in the PDF context and configures it using default values.

## Declaration

```objectivec
- (void) beginPage;
```

<a id="Discussion"></a>

## Discussion

This function ends any previous page before beginning a new one. It sets the bounds of the new page to the bounds rectangle you supplied when you created the PDF renderer.

## See Also

### Marking new pages

- [beginPageWithBounds:pageInfo:](beginpage%28withbounds_pageinfo_%29.md): Marks the beginning of a new page in the PDF context and configures it using the specified values.
