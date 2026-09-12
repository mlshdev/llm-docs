> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/1495005-mach-o-architecture](https://developer.apple.com/documentation/foundation/1495005-mach-o-architecture)

# Mach-O Architecture (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Constants that describe the CPU types that a bundle’s executable code supports.

## Topics

### Constants

- [NSBundleExecutableArchitectureARM64](nsbundleexecutablearchitecturearm64.md): The 64-bit ARM architecture.
- [NSBundleExecutableArchitectureI386](nsbundleexecutablearchitecturei386.md): The 32-bit Intel architecture.
- [NSBundleExecutableArchitectureX86_64](nsbundleexecutablearchitecturex86_64.md): The 64-bit Intel architecture.
- [NSBundleExecutableArchitecturePPC](nsbundleexecutablearchitectureppc.md): The 32-bit PowerPC architecture.
- [NSBundleExecutableArchitecturePPC64](nsbundleexecutablearchitectureppc64.md): The 64-bit PowerPC architecture.

## See Also

### Loading code from a bundle

- [executableArchitectures](bundle/executablearchitectures.md): An array of numbers indicating the architecture types supported by the bundle’s executable.
- [preflight()](bundle/preflight%28%29.md): Returns a Boolean value indicating whether the bundle’s executable code could be loaded successfully.
- [load()](bundle/load%28%29.md): Dynamically loads the bundle’s executable code into a running program, if the code has not already been loaded.
- [loadAndReturnError()](bundle/loadandreturnerror%28%29.md): Loads the bundle’s executable code and returns any errors.
- [unload()](bundle/unload%28%29.md): Unloads the code associated with the receiver.
- [isLoaded](bundle/isloaded.md): The load status of a bundle.

# Mach-O Architecture (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Constants that describe the CPU types that a bundle’s executable code supports.

## Topics

### Constants

- [NSBundleExecutableArchitectureARM64](nsbundleexecutablearchitecturearm64.md): The 64-bit ARM architecture.
- [NSBundleExecutableArchitectureI386](nsbundleexecutablearchitecturei386.md): The 32-bit Intel architecture.
- [NSBundleExecutableArchitectureX86_64](nsbundleexecutablearchitecturex86_64.md): The 64-bit Intel architecture.
- [NSBundleExecutableArchitecturePPC](nsbundleexecutablearchitectureppc.md): The 32-bit PowerPC architecture.
- [NSBundleExecutableArchitecturePPC64](nsbundleexecutablearchitectureppc64.md): The 64-bit PowerPC architecture.

## See Also

### Loading code from a bundle

- [executableArchitectures](bundle/executablearchitectures.md): An array of numbers indicating the architecture types supported by the bundle’s executable.
- [preflightAndReturnError:](bundle/preflight%28%29.md): Returns a Boolean value indicating whether the bundle’s executable code could be loaded successfully.
- [load](bundle/load%28%29.md): Dynamically loads the bundle’s executable code into a running program, if the code has not already been loaded.
- [loadAndReturnError:](bundle/loadandreturnerror%28%29.md): Loads the bundle’s executable code and returns any errors.
- [unload](bundle/unload%28%29.md): Unloads the code associated with the receiver.
- [loaded](bundle/isloaded.md): The load status of a bundle.
