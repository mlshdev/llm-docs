> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeserviceviewcontroller/validatecontent()](https://developer.apple.com/documentation/social/slcomposeserviceviewcontroller/validatecontent())

# validateContent() (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

Performs validation of the current content and updates the state of the Post button, if appropriate.

## Declaration

```swift
func validateContent()
```

<a id="Discussion"></a>

## Discussion

By default, `validateContent` calls [isContentValid()](iscontentvalid%28%29.md), performs internal content validation, and updates the state of the Post button, if necessary. You should call this method if you change any data that your implementation of `isContentValid` uses to test for content validity.

## See Also

### Validating Content

- [charactersRemaining](charactersremaining.md): The number of characters remaining in a custom character limit.
- [isContentValid()](iscontentvalid%28%29.md): A Boolean value that indicates whether the current content and attachments are valid.

# validateContent (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

Performs validation of the current content and updates the state of the Post button, if appropriate.

## Declaration

```objectivec
- (void) validateContent;
```

<a id="Discussion"></a>

## Discussion

By default, `validateContent` calls [isContentValid](iscontentvalid%28%29.md), performs internal content validation, and updates the state of the Post button, if necessary. You should call this method if you change any data that your implementation of `isContentValid` uses to test for content validity.

## See Also

### Validating Content

- [charactersRemaining](charactersremaining.md): The number of characters remaining in a custom character limit.
- [isContentValid](iscontentvalid%28%29.md): A Boolean value that indicates whether the current content and attachments are valid.
