> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/load()](https://developer.apple.com/documentation/foundation/bundle/load())

# load() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Dynamically loads the bundle’s executable code into a running program, if the code has not already been loaded.

## Declaration

```swift
func load() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the method successfully loads the bundle’s code or if the code has already been loaded, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can use this method to load the code associated with a dynamically loaded bundle, such as a plug-in or framework. Prior to OS X version 10.5, a bundle would attempt to load its code—if it had any—only once. Once loaded, you could not unload that code. In macOS 10.5 and later, you can unload a bundle’s executable code using the [unload()](unload%28%29.md) method.

You don’t need to load a bundle’s executable code to search the bundle’s resources.

This method initializes the principal class in the bundle. To add code you want executed after loading, override the [initialize()](../../objectivec/nsobject-swift.class/initialize%28%29.md) class method of the principal class.

<a id="Special-Considerations"></a>

### Special Considerations

If an `NSBundle` object calls the [load()](load%28%29.md) method, it calls the [unload()](unload%28%29.md) method before being deallocated. Therefore, you should retain any `NSBundle` object for as long as any code from it is used by the app.

## See Also

### Related Documentation

- [principalClass](principalclass.md): The bundle’s principal class.
- [classNamed(\_:)](classnamed%28__%29.md): Returns the `Class` object for the specified name.

### Loading code from a bundle

- [executableArchitectures](executablearchitectures.md): An array of numbers indicating the architecture types supported by the bundle’s executable.
- [preflight()](preflight%28%29.md): Returns a Boolean value indicating whether the bundle’s executable code could be loaded successfully.
- [loadAndReturnError()](loadandreturnerror%28%29.md): Loads the bundle’s executable code and returns any errors.
- [unload()](unload%28%29.md): Unloads the code associated with the receiver.
- [isLoaded](isloaded.md): The load status of a bundle.
- [Mach-O Architecture](../1495005-mach-o-architecture.md): Constants that describe the CPU types that a bundle’s executable code supports.

# load (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Dynamically loads the bundle’s executable code into a running program, if the code has not already been loaded.

## Declaration

```objectivec
- (BOOL) load;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the method successfully loads the bundle’s code or if the code has already been loaded, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can use this method to load the code associated with a dynamically loaded bundle, such as a plug-in or framework. Prior to OS X version 10.5, a bundle would attempt to load its code—if it had any—only once. Once loaded, you could not unload that code. In macOS 10.5 and later, you can unload a bundle’s executable code using the [unload](unload%28%29.md) method.

You don’t need to load a bundle’s executable code to search the bundle’s resources.

This method initializes the principal class in the bundle. To add code you want executed after loading, override the [initialize](../../objectivec/nsobject-swift.class/initialize%28%29.md) class method of the principal class.

<a id="Special-Considerations"></a>

### Special Considerations

If an `NSBundle` object calls the [load](load%28%29.md) method, it calls the [unload](unload%28%29.md) method before being deallocated. Therefore, you should retain any `NSBundle` object for as long as any code from it is used by the app.

## See Also

### Related Documentation

- [principalClass](principalclass.md): The bundle’s principal class.
- [classNamed:](classnamed%28__%29.md): Returns the `Class` object for the specified name.

### Loading code from a bundle

- [executableArchitectures](executablearchitectures.md): An array of numbers indicating the architecture types supported by the bundle’s executable.
- [preflightAndReturnError:](preflight%28%29.md): Returns a Boolean value indicating whether the bundle’s executable code could be loaded successfully.
- [loadAndReturnError:](loadandreturnerror%28%29.md): Loads the bundle’s executable code and returns any errors.
- [unload](unload%28%29.md): Unloads the code associated with the receiver.
- [loaded](isloaded.md): The load status of a bundle.
- [Mach-O Architecture](../1495005-mach-o-architecture.md): Constants that describe the CPU types that a bundle’s executable code supports.
