> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/isloaded](https://developer.apple.com/documentation/foundation/bundle/isloaded)

# isLoaded (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The load status of a bundle.

## Declaration

```swift
var isLoaded: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the bundle’s code is currently loaded, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Loading code from a bundle

- [executableArchitectures](executablearchitectures.md): An array of numbers indicating the architecture types supported by the bundle’s executable.
- [preflight()](preflight%28%29.md): Returns a Boolean value indicating whether the bundle’s executable code could be loaded successfully.
- [load()](load%28%29.md): Dynamically loads the bundle’s executable code into a running program, if the code has not already been loaded.
- [loadAndReturnError()](loadandreturnerror%28%29.md): Loads the bundle’s executable code and returns any errors.
- [unload()](unload%28%29.md): Unloads the code associated with the receiver.
- [Mach-O Architecture](../1495005-mach-o-architecture.md): Constants that describe the CPU types that a bundle’s executable code supports.

# loaded (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The load status of a bundle.

## Declaration

```objectivec
@property (readonly, getter=isLoaded) BOOL loaded;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the bundle’s code is currently loaded, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Loading code from a bundle

- [executableArchitectures](executablearchitectures.md): An array of numbers indicating the architecture types supported by the bundle’s executable.
- [preflightAndReturnError:](preflight%28%29.md): Returns a Boolean value indicating whether the bundle’s executable code could be loaded successfully.
- [load](load%28%29.md): Dynamically loads the bundle’s executable code into a running program, if the code has not already been loaded.
- [loadAndReturnError:](loadandreturnerror%28%29.md): Loads the bundle’s executable code and returns any errors.
- [unload](unload%28%29.md): Unloads the code associated with the receiver.
- [Mach-O Architecture](../1495005-mach-o-architecture.md): Constants that describe the CPU types that a bundle’s executable code supports.
