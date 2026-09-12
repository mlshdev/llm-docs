> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/cfbridgingretain(_:)](https://developer.apple.com/documentation/foundation/cfbridgingretain(_:))

# CFBridgingRetain(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Casts an Objective-C pointer to a Core Foundation pointer and also transfers ownership to the caller.

## Declaration

```swift
func CFBridgingRetain(_ X: Any?) -> CFTypeRef?
```

<a id="Discussion"></a>

## Discussion

You use this function to cast an Objective-C object as Core Foundation-style object and take ownership of the object so that you can manage its lifetime. You are responsible for subsequently releasing the object, as illustrated in this example:

```objc
NSString *string = <#Get a string#>;
CFStringRef cfString = (CFStringRef)CFBridgingRetain(string);
// Use the CF string.
CFRelease(cfString);
```

# CFBridgingRetain (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Casts an Objective-C pointer to a Core Foundation pointer and also transfers ownership to the caller.

## Declaration

```objectivec
static CFTypeRefCFBridgingRetain(id X);
```

<a id="Discussion"></a>

## Discussion

You use this function to cast an Objective-C object as Core Foundation-style object and take ownership of the object so that you can manage its lifetime. You are responsible for subsequently releasing the object, as illustrated in this example:

```objc
NSString *string = <#Get a string#>;
CFStringRef cfString = (CFStringRef)CFBridgingRetain(string);
// Use the CF string.
CFRelease(cfString);
```

## See Also

### Related Documentation

- [CFBridgingRelease](cfbridgingrelease.md): Moves a non-Objective-C pointer to Objective-C and also transfers ownership to ARC.

### Core Foundation ARC Integration

- [CFBridgingRelease](cfbridgingrelease.md): Moves a non-Objective-C pointer to Objective-C and also transfers ownership to ARC.
