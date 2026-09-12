> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/externalmacro(module:type:)](https://developer.apple.com/documentation/swift/externalmacro(module:type:))

# externalMacro(module:type:)

**Framework:** Swift  
**Kind:** Macro  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies the module and type name for a macro’s implementation.

## Declaration

```swift
@freestanding(expression) macro externalMacro<T>(module: String, type: String) -> T
```

## Parameters

- `module`: The module name.
- `type`: The type that implements the macro.

<a id="return-value"></a>

## Return Value

The macro’s implementation.

<a id="overview"></a>

## Overview

This macro can only be used to define a macro; using it in any other context is an error. The specified type must conform to the protocols that correspond to the roles of the macro being declared. For example:

```swift
macro stringify(_ value: T) -> (T, String) =
    #externalMacro(module: "ExampleMacros", type: "StringifyMacro")
```
