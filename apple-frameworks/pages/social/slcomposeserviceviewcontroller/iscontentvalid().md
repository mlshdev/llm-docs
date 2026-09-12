> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeserviceviewcontroller/iscontentvalid()](https://developer.apple.com/documentation/social/slcomposeserviceviewcontroller/iscontentvalid())

# isContentValid() (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

A Boolean value that indicates whether the current content and attachments are valid.

## Declaration

```swift
func isContentValid() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the current content and attachments are valid for posting, otherwise [false](https://developer.apple.com/documentation/swift/false). The default return value is [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

This method is automatically called after each change a user makes to the text in the compose view. You can use this method to determine whether the Post button should be enabled and to update [charactersRemaining](charactersremaining.md), if necessary.

A subclass should implement this method to perform custom validation of the user’s content before initiating a post.

## See Also

### Validating Content

- [charactersRemaining](charactersremaining.md): The number of characters remaining in a custom character limit.
- [validateContent()](validatecontent%28%29.md): Performs validation of the current content and updates the state of the Post button, if appropriate.

# isContentValid (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

A Boolean value that indicates whether the current content and attachments are valid.

## Declaration

```objectivec
- (BOOL) isContentValid;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the current content and attachments are valid for posting, otherwise [false](https://developer.apple.com/documentation/swift/false). The default return value is [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

This method is automatically called after each change a user makes to the text in the compose view. You can use this method to determine whether the Post button should be enabled and to update [charactersRemaining](charactersremaining.md), if necessary.

A subclass should implement this method to perform custom validation of the user’s content before initiating a post.

## See Also

### Validating Content

- [charactersRemaining](charactersremaining.md): The number of characters remaining in a custom character limit.
- [validateContent](validatecontent%28%29.md): Performs validation of the current content and updates the state of the Post button, if appropriate.
