> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/init(componentdescription:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/init(componentdescription:))

# init(componentDescription:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Synchronously initializes a new audio unit object.

## Declaration

```swift
convenience init(componentDescription: AudioComponentDescription) throws
```

## Parameters

- `componentDescription`: The component to instantiate.

<a id="return-value"></a>

## Return Value

An initialized audio unit, or `nil` if initialization failed.

<a id="Discussion"></a>

## Discussion

This is the convenience initializer.

A single audio unit subclass may implement multiple audio units—for example, an effect that can also function as a generator, or a cluster of related effects.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating an Audio Unit

- [init(componentDescription:options:)](init%28componentdescription_options_%29.md): Synchronously initializes a new audio unit object.
- [instantiate(with:options:completionHandler:)](instantiate%28with_options_completionhandler_%29.md): Asynchronously creates an audio unit instance.

# initWithComponentDescription:error: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Synchronously initializes a new audio unit object.

## Declaration

```objectivec
- (instancetype) initWithComponentDescription:(AudioComponentDescription) componentDescription error:(NSError **) outError;
```

## Parameters

- `componentDescription`: The component to instantiate.
- `outError`: Returns an error in the event of a failure, or `nil` if initialization succeeded.

<a id="return-value"></a>

## Return Value

An initialized audio unit, or `nil` if initialization failed.

<a id="Discussion"></a>

## Discussion

This is the convenience initializer.

A single audio unit subclass may implement multiple audio units—for example, an effect that can also function as a generator, or a cluster of related effects.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating an Audio Unit

- [initWithComponentDescription:options:error:](init%28componentdescription_options_%29.md): Synchronously initializes a new audio unit object.
- [instantiateWithComponentDescription:options:completionHandler:](instantiate%28with_options_completionhandler_%29.md): Asynchronously creates an audio unit instance.
