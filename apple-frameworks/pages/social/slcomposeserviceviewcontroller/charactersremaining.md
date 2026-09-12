> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeserviceviewcontroller/charactersremaining](https://developer.apple.com/documentation/social/slcomposeserviceviewcontroller/charactersremaining)

# charactersRemaining (Swift)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

The number of characters remaining in a custom character limit.

## Declaration

```swift
var charactersRemaining: NSNumber! { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to a non-`nil` value when you want to make the character count view appear in the compose view (changing the value redraws the character count view). The default value of this property is `nil`.

## See Also

### Validating Content

- [isContentValid()](iscontentvalid%28%29.md): A Boolean value that indicates whether the current content and attachments are valid.
- [validateContent()](validatecontent%28%29.md): Performs validation of the current content and updates the state of the Post button, if appropriate.

# charactersRemaining (Objective-C)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

The number of characters remaining in a custom character limit.

## Declaration

```objectivec
@property (nonatomic, strong) NSNumber * charactersRemaining;
```

```objectivec
@property (atomic, strong) NSNumber * charactersRemaining;
```

<a id="Discussion"></a>

## Discussion

Set this property to a non-`nil` value when you want to make the character count view appear in the compose view (changing the value redraws the character count view). The default value of this property is `nil`.

## See Also

### Validating Content

- [isContentValid](iscontentvalid%28%29.md): A Boolean value that indicates whether the current content and attachments are valid.
- [validateContent](validatecontent%28%29.md): Performs validation of the current content and updates the state of the Post button, if appropriate.
