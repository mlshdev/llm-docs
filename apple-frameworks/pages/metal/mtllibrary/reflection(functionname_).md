> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtllibrary/reflection(functionname:)](https://developer.apple.com/documentation/metal/mtllibrary/reflection(functionname:))

# reflection(functionName:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Retrieves reflection information for a function in the library.

## Declaration

```swift
func reflection(functionName: String) -> MTLFunctionReflection?
```

## Parameters

- `functionName`: The name of a GPU function in the library. The name needs to match one of the elements in the string array of library’s [functionNames](functionnames.md) property.

<a id="return-value"></a>

## Return Value

An `MTLFunctionReflection` instance when the method succeeds; otherwise `nil`.

<a id="discussion"></a>

## Discussion

The reflection instance contains metadata information about a specific GPU function, which can include:

- Function parameters
- Return types
- Bindings
- Annotations from a developer, if available

> **Note**

> The Metal compiler generates the function’s reflection information when you or Xcode build the library.

The method only returns reflection information if all of the following conditions apply:

- The library has a function with a name that matches `functionName`.
- The deployment target is macOS 13.0 or later, or iOS 16.0 or later, or visionOS 2.0 or later.

# reflectionForFunctionWithName: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Retrieves reflection information for a function in the library.

## Declaration

```objectivec
- (MTLFunctionReflection *) reflectionForFunctionWithName:(NSString *) functionName;
```

## Parameters

- `functionName`: The name of a GPU function in the library. The name needs to match one of the elements in the string array of library’s [functionNames](functionnames.md) property.

<a id="return-value"></a>

## Return Value

An `MTLFunctionReflection` instance when the method succeeds; otherwise `nil`.

<a id="discussion"></a>

## Discussion

The reflection instance contains metadata information about a specific GPU function, which can include:

- Function parameters
- Return types
- Bindings
- Annotations from a developer, if available

> **Note**

> The Metal compiler generates the function’s reflection information when you or Xcode build the library.

The method only returns reflection information if all of the following conditions apply:

- The library has a function with a name that matches `functionName`.
- The deployment target is macOS 13.0 or later, or iOS 16.0 or later, or visionOS 2.0 or later.
