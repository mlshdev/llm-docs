> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laright/init()](https://developer.apple.com/documentation/localauthentication/laright/init())

# init() (Swift)

**Framework:** Local Authentication  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a right using the default authorization requirements.

## Declaration

```swift
init()
```

## See Also

### Authorizing a right

- [init(requirement:)](init%28requirement_%29.md): Creates a right with the authentication requirements you supply.
- [tag](tag.md): An integer you use to identify a right.
- [authorize(localizedReason:completion:)](authorize%28localizedreason_completion_%29.md): Performs an authorization on the right.
- [authorize(localizedReason:in:completion:)](authorize%28localizedreason_in_completion_%29.md): Performs an authorization on the right with a window context you supply.

# init (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a right using the default authorization requirements.

## Declaration

```objectivec
- (instancetype) init;
```

## See Also

### Authorizing a right

- [initWithRequirement:](init%28requirement_%29.md): Creates a right with the authentication requirements you supply.
- [tag](tag.md): An integer you use to identify a right.
- [authorizeWithLocalizedReason:completion:](authorize%28localizedreason_completion_%29.md): Performs an authorization on the right.
- [authorizeWithLocalizedReason:inPresentationContext:completion:](authorize%28localizedreason_in_completion_%29.md): Performs an authorization on the right with a window context you supply.
