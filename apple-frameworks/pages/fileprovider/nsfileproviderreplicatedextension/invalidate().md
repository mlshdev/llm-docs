> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderreplicatedextension/invalidate()](https://developer.apple.com/documentation/fileprovider/nsfileproviderreplicatedextension/invalidate())

# invalidate() (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

Tells the file provider to perform any necessary cleanup so that the system can deallocate it.

## Declaration

```swift
func invalidate()
```

<a id="Discussion"></a>

## Discussion

Your implementation should perform any necessary cleanup so that the system can dismiss and deallocate the file provider.

> **Note**

>  Your extension must handle multiple active copies of the File Provider extension in the same process, for instance, if the user has several active domains, or when the system discards one instance while initiating another.

## See Also

### Creating and Removing File Providers

- [init(domain:)](init%28domain_%29.md): Creates an instance of the file provider for the specified domain.

# invalidate (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

Tells the file provider to perform any necessary cleanup so that the system can deallocate it.

## Declaration

```objectivec
- (void) invalidate;
```

<a id="Discussion"></a>

## Discussion

Your implementation should perform any necessary cleanup so that the system can dismiss and deallocate the file provider.

> **Note**

>  Your extension must handle multiple active copies of the File Provider extension in the same process, for instance, if the user has several active domains, or when the system discards one instance while initiating another.

## See Also

### Creating and Removing File Providers

- [initWithDomain:](init%28domain_%29.md): Creates an instance of the file provider for the specified domain.
