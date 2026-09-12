> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/cfbridgingrelease](https://developer.apple.com/documentation/foundation/cfbridgingrelease)

# CFBridgingRelease

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Moves a non-Objective-C pointer to Objective-C and also transfers ownership to ARC.

## Declaration

```objectivec
static idCFBridgingRelease(CFTypeRef X);
```

<a id="Discussion"></a>

## Discussion

You use this function to cast a Core Foundation-style object as an Objective-C object and transfer ownership of the object to ARC such that you don’t have to release the object, as illustrated in this example:

```objc
CFStringRef cfName = ABRecordCopyValue(person, kABPersonFirstNameProperty);
NSString *name = (NSString *)CFBridgingRelease(cfName);
```

## See Also

### Core Foundation ARC Integration

- [CFBridgingRetain](cfbridgingretain%28__%29.md): Casts an Objective-C pointer to a Core Foundation pointer and also transfers ownership to the caller.
