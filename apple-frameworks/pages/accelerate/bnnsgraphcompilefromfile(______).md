> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphcompilefromfile(_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphcompilefromfile(_:_:_:))

# BNNSGraphCompileFromFile(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Compiles a source mlmodelc file to a graph object.

## Declaration

```swift
func BNNSGraphCompileFromFile(_ filename: UnsafePointer<CChar>, _ function: UnsafePointer<CChar>?, _ options: bnns_graph_compile_options_t) -> bnns_graph_t
```

## Parameters

- `filename`: The path to the source mlmodelc file.
- `function`: The name of the function that this operation compiles. Pass `nil` to specify that the operation compiles all the functions in the source file.
- `options`: The compilation options. Pass `nil` to specify that the operation uses the default set of options.

<a id="return-value"></a>

## Return Value

A compiled graph object. If the operation fails, the graph object’s [data](bnns_graph_t/data.md) property is `nil`.

<a id="Discussion"></a>

## Discussion

Xcode automatically compiles a Core ML model package (files with an `.mlpackage` file extension) into an mlmodelc file. The following code compiles a [bnns_graph_t](bnns_graph_t.md) instance from a file named `myModel.mlpackage` that you copy into the project.

```swift
let options = BNNSGraphCompileOptionsMakeDefault()
defer {
    BNNSGraphCompileOptionsDestroy(options)
}

guard let fileName = Bundle.main.url(
    forResource: "myModel",
    withExtension: "mlmodelc")?.path() else {
    fatalError()
}

let graph = BNNSGraphCompileFromFile(fileName, 
                                     nil,
                                     options)

if graph.size == 0 {
    fatalError()
}
```

## See Also

### Related Documentation

- [Updating a Model File to a Model Package](../coreml/updating-a-model-file-to-a-model-package.md): Convert a Core ML model file into a model package in Xcode.

### Compiling a graph object

- [bnns_graph_t](bnns_graph_t.md): The compiled graph object.

# BNNSGraphCompileFromFile (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Compiles a source mlmodelc file to a graph object.

## Declaration

```objectivec
bnns_graph_t BNNSGraphCompileFromFile(const char *filename, const char *function, bnns_graph_compile_options_t options);
```

## Parameters

- `filename`: The path to the source mlmodelc file.
- `function`: The name of the function that this operation compiles. Pass `nil` to specify that the operation compiles all the functions in the source file.
- `options`: The compilation options. Pass `nil` to specify that the operation uses the default set of options.

<a id="return-value"></a>

## Return Value

A compiled graph object. If the operation fails, the graph object’s [data](bnns_graph_t/data.md) property is `nil`.

<a id="Discussion"></a>

## Discussion

Xcode automatically compiles a Core ML model package (files with an `.mlpackage` file extension) into an mlmodelc file. The following code compiles a [bnns_graph_t](bnns_graph_t.md) instance from a file named `myModel.mlpackage` that you copy into the project.

```swift
let options = BNNSGraphCompileOptionsMakeDefault()
defer {
    BNNSGraphCompileOptionsDestroy(options)
}

guard let fileName = Bundle.main.url(
    forResource: "myModel",
    withExtension: "mlmodelc")?.path() else {
    fatalError()
}

let graph = BNNSGraphCompileFromFile(fileName, 
                                     nil,
                                     options)

if graph.size == 0 {
    fatalError()
}
```

## See Also

### Related Documentation

- [Updating a Model File to a Model Package](../coreml/updating-a-model-file-to-a-model-package.md): Convert a Core ML model file into a model package in Xcode.

### Compiling a graph object

- [bnns_graph_t](bnns_graph_t.md): The compiled graph object.
