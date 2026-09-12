> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laright/tag](https://developer.apple.com/documentation/localauthentication/laright/tag)

# tag (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An integer you use to identify a right.

## Declaration

```swift
var tag: Int { get set }
```

## See Also

### Authorizing a right

- [init()](init%28%29.md): Creates a right using the default authorization requirements.
- [init(requirement:)](init%28requirement_%29.md): Creates a right with the authentication requirements you supply.
- [authorize(localizedReason:completion:)](authorize%28localizedreason_completion_%29.md): Performs an authorization on the right.
- [authorize(localizedReason:in:completion:)](authorize%28localizedreason_in_completion_%29.md): Performs an authorization on the right with a window context you supply.

# tag (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An integer you use to identify a right.

## Declaration

```objectivec
@property (nonatomic) NSInteger tag;
```

## See Also

### Authorizing a right

- [init](init%28%29.md): Creates a right using the default authorization requirements.
- [initWithRequirement:](init%28requirement_%29.md): Creates a right with the authentication requirements you supply.
- [authorizeWithLocalizedReason:completion:](authorize%28localizedreason_completion_%29.md): Performs an authorization on the right.
- [authorizeWithLocalizedReason:inPresentationContext:completion:](authorize%28localizedreason_in_completion_%29.md): Performs an authorization on the right with a window context you supply.
