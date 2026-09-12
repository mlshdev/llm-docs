> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnetservices-errors](https://developer.apple.com/documentation/foundation/nsnetservices-errors)

# NSNetServices Errors (Swift)

**Framework:** Foundation  
**Kind:** API Collection

If an error occurs, the delegate error-handling methods return a dictionary with the following keys.

## Topics

### Constants

- [errorCode](netservice/errorcode-swift.type.property.md): This key identifies the error that occurred during the most recent operation.
- [errorDomain](netservice/errordomain.md): This key identifies the originator of the error, which is either the `NSNetService` object or the mach network layer. For most errors, you should not need the value provided by this key.

## See Also

### Constants

- [NetService.ErrorCode](netservice/errorcode-swift.enum.md): These constants identify errors that can occur when accessing net services.
- [NetService.Options](netservice/options.md): These constants specify options for a network service.

# NSNetServices Errors (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

If an error occurs, the delegate error-handling methods return a dictionary with the following keys.

## Topics

### Constants

- [NSNetServicesErrorCode](netservice/errorcode-swift.type.property.md): This key identifies the error that occurred during the most recent operation.
- [NSNetServicesErrorDomain](netservice/errordomain.md): This key identifies the originator of the error, which is either the `NSNetService` object or the mach network layer. For most errors, you should not need the value provided by this key.

## See Also

### Constants

- [NSNetServicesError](netservice/errorcode-swift.enum.md): These constants identify errors that can occur when accessing net services.
- [NSNetServiceOptions](netservice/options.md): These constants specify options for a network service.
