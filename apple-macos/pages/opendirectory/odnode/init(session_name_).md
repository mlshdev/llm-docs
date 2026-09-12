> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odnode/init(session:name:)](https://developer.apple.com/documentation/opendirectory/odnode/init(session:name:))

# init(session:name:) (Swift)

**Framework:** Open Directory  
**Kind:** Initializer  
**Availability:** Mac Catalyst · macOS 10.6+

Creates a node object with a specified session and name.

## Declaration

```swift
init(session inSession: ODSession!, name inName: String!) throws
```

## Parameters

- `inSession`: The session.
- `inName`: The name of the node.

<a id="return-value"></a>

## Return Value

The created node object.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating and Initializing a Node

- [init(session:type:)](init%28session_type_%29.md): Creates a node object with a specified session and type.

# initWithSession:name:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Creates a node object with a specified session and name.

## Declaration

```objectivec
- (instancetype) initWithSession:(ODSession *) inSession name:(NSString *) inName error:(NSError **) outError;
```

## Parameters

- `inSession`: The session.
- `inName`: The name of the node.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

The created node object.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating and Initializing a Node

- [initWithSession:type:error:](init%28session_type_%29.md): Creates a node object with a specified session and type.
- [nodeWithSession:name:error:](nodewithsession_name_error_.md): Returns an autoreleased node object with a specified session and name.
- [nodeWithSession:type:error:](nodewithsession_type_error_.md): Returns an autoreleased node object with a specified session and type.
