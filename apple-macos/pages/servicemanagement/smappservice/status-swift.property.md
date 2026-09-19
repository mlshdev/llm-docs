> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/servicemanagement/smappservice/status-swift.property

# status (Swift)

**Framework:** Service Management  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

A property that describes registration or authorization state of the service.

## Declaration

```swift
var status: SMAppService.Status { get }
```

## See Also

### Getting the state of the service

- [SMAppService.Status](status-swift.enum.md): Constants that describe the registration or authorization status of a helper executable.

# status (Objective-C)

**Framework:** Service Management  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

A property that describes registration or authorization state of the service.

## Declaration

```objectivec
@property (readonly) SMAppServiceStatus status;
```

## See Also

### Getting the state of the service

- [SMAppServiceStatus](status-swift.enum.md): Constants that describe the registration or authorization status of a helper executable.
