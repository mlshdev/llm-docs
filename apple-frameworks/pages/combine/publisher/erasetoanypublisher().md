> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/erasetoanypublisher()](https://developer.apple.com/documentation/combine/publisher/erasetoanypublisher())

# eraseToAnyPublisher()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Wraps this publisher with a type eraser.

## Declaration

```swift
func eraseToAnyPublisher() -> AnyPublisher<Self.Output, Self.Failure>
```

<a id="return-value"></a>

## Return Value

An [AnyPublisher](../anypublisher.md) wrapping this publisher.

<a id="discussion"></a>

## Discussion

Use [eraseToAnyPublisher()](erasetoanypublisher%28%29.md) to expose an instance of [AnyPublisher](../anypublisher.md) to the downstream subscriber, rather than this publisher’s actual type. This form of *type erasure* preserves abstraction across API boundaries, such as different modules. When you expose your publishers as the [AnyPublisher](../anypublisher.md) type, you can change the underlying implementation over time without affecting existing clients.

The following example shows two types that each have a `publisher` property. `TypeWithSubject` exposes this property as its actual type, [PassthroughSubject](../passthroughsubject.md), while `TypeWithErasedSubject` uses [eraseToAnyPublisher()](erasetoanypublisher%28%29.md) to expose it as an [AnyPublisher](../anypublisher.md). As seen in the output, a caller from another module can access `TypeWithSubject.publisher` as its native type. This means you can’t change your publisher to a different type without breaking the caller. By comparison, `TypeWithErasedSubject.publisher` appears to callers as an [AnyPublisher](../anypublisher.md), so you can change the underlying publisher type at will.

```swift
public class TypeWithSubject {
    public let publisher: some Publisher = PassthroughSubject<Int,Never>()
}
public class TypeWithErasedSubject {
    public let publisher: some Publisher = PassthroughSubject<Int,Never>()
        .eraseToAnyPublisher()
}

// In another module:
let nonErased = TypeWithSubject()
if let subject = nonErased.publisher as? PassthroughSubject<Int,Never> {
    print("Successfully cast nonErased.publisher.")
}
let erased = TypeWithErasedSubject()
if let subject = erased.publisher as? PassthroughSubject<Int,Never> {
    print("Successfully cast erased.publisher.")
}

// Prints "Successfully cast nonErased.publisher."
```
