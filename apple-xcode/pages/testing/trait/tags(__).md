> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/trait/tags(_:)](https://developer.apple.com/documentation/testing/trait/tags(_:))

# tags(\_:)

**Framework:** Swift Testing  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Construct a list of tags to apply to a test.

## Declaration

```swift
static func tags(_ tags: Tag...) -> Self
```

## Parameters

- `tags`: The list of tags to apply to the test.

<a id="return-value"></a>

## Return Value

An instance of [Tag.List](../tag/list.md) containing the specified tags.

## Mentioned In

- [Organizing test functions with suite types](../organizingtests.md)
- [Adding tags to tests](../addingtags.md)
- [Defining test functions](../definingtests.md)

## See Also

### Categorizing tests and adding information

- [comments](comments.md): The user-provided comments for this trait.
