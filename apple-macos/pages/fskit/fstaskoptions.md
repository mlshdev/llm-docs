> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fstaskoptions](https://developer.apple.com/documentation/fskit/fstaskoptions)

# FSTaskOptions (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A class that passes command options to a task, optionally providing security-scoped URLs.

## Declaration

```swift
class FSTaskOptions
```

## Topics

### Retrieving task options

- [taskOptions](fstaskoptions/taskoptions.md): An array of strings that represent command-line options for the task.

### Retrieving task option URLs

- [url(forOption:)](fstaskoptions/url%28foroption_%29.md): Retrieves a URL for a given option.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Tasks

- [FSTask](fstask.md): A class that enables a file system module to pass log messages and completion notifications to clients.

# FSTaskOptions (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A class that passes command options to a task, optionally providing security-scoped URLs.

## Declaration

```objectivec
@interface FSTaskOptions : NSObject
```

## Topics

### Retrieving task options

- [taskOptions](fstaskoptions/taskoptions.md): An array of strings that represent command-line options for the task.

### Retrieving task option URLs

- [urlForOption:](fstaskoptions/url%28foroption_%29.md): Retrieves a URL for a given option.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Tasks

- [FSTask](fstask.md): A class that enables a file system module to pass log messages and completion notifications to clients.
