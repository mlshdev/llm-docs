> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfassertionoutput-c.class/first

# first

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A symmetric key that’s unique to the passkey and derives from the first input.

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * first;
```

## See Also

### Accessing symmetric keys

- [second](second.md): A second symmetric key that’s unique to the passkey, and derives from the second input, if specified.
