> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laright/authorize(localizedreason:in:completion:)](https://developer.apple.com/documentation/localauthentication/laright/authorize(localizedreason:in:completion:))

# authorize(localizedReason:in:completion:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+ · visionOS 1.0+

Performs an authorization on the right with a window context you supply.

## Declaration

```swift
func authorize(localizedReason: String, in presentationContext: LAPresentationContext, completion handler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func authorize(localizedReason: String, in presentationContext: LAPresentationContext) async throws
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func authorize(localizedReason: String, in presentationContext: LAPresentationContext) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Authorizing a right

- [init()](init%28%29.md): Creates a right using the default authorization requirements.
- [init(requirement:)](init%28requirement_%29.md): Creates a right with the authentication requirements you supply.
- [tag](tag.md): An integer you use to identify a right.
- [authorize(localizedReason:completion:)](authorize%28localizedreason_completion_%29.md): Performs an authorization on the right.

# authorizeWithLocalizedReason:inPresentationContext:completion: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+ · visionOS 1.0+

Performs an authorization on the right with a window context you supply.

## Declaration

```objectivec
- (void) authorizeWithLocalizedReason:(NSString *) localizedReason inPresentationContext:(LAPresentationContext) presentationContext completion:(void (^)(NSError *)) handler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func authorize(localizedReason: String, in presentationContext: LAPresentationContext) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Authorizing a right

- [init](init%28%29.md): Creates a right using the default authorization requirements.
- [initWithRequirement:](init%28requirement_%29.md): Creates a right with the authentication requirements you supply.
- [tag](tag.md): An integer you use to identify a right.
- [authorizeWithLocalizedReason:completion:](authorize%28localizedreason_completion_%29.md): Performs an authorization on the right.
