> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odsession/init(options:)](https://developer.apple.com/documentation/opendirectory/odsession/init(options:))

# init(options:) (Swift)

**Framework:** Open Directory  
**Kind:** Initializer  
**Availability:** Mac Catalyst · macOS 10.6+

Creates a session object directed over proxy to another host.

## Declaration

```swift
init(options inOptions: [AnyHashable : Any]! = [:]) throws
```

## Parameters

- `inOptions`: A dictionary of options to associate with the session. Can be `nil`.

<a id="return-value"></a>

## Return Value

The created session object.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [ODSession](../odsession.md): An `ODSession` object serves as a Cocoa wrapper for an Open Directory session.

### Creating and Accessing Sessions

- [default()](default%28%29.md): Returns a shared instance of the local session.

# initWithOptions:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Creates a session object directed over proxy to another host.

## Declaration

```objectivec
- (instancetype) initWithOptions:(NSDictionary *) inOptions error:(NSError **) outError;
```

## Parameters

- `inOptions`: A dictionary of options to associate with the session. Can be `nil`.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

The created session object.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [ODSession](../odsession.md): An `ODSession` object serves as a Cocoa wrapper for an Open Directory session.

### Creating and Accessing Sessions

- [defaultSession](default%28%29.md): Returns a shared instance of the local session.
- [sessionWithOptions:error:](sessionwithoptions_error_.md): Returns an autoreleased session object directed over proxy to another host.
