> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialprfregistrationoutput-c.class/first](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfregistrationoutput-c.class/first)

# first

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A symmetric key that’s unique to the passkey and derives from the first input, if specified.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSData * first;
```

## See Also

### Accessing symmetric keys

- [second](second.md): A second symmetric key that’s unique to the passkey, and derives from the second input, if specified.
