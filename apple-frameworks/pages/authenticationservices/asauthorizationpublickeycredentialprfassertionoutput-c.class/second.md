> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfassertionoutput-c.class/second

# second

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A second symmetric key that’s unique to the passkey, and derives from the second input, if specified.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSData * second;
```

<a id="discussion"></a>

## Discussion

If `input2` isn’t specified, this key is `nil`.

## See Also

### Accessing symmetric keys

- [first](first.md): A symmetric key that’s unique to the passkey and derives from the first input.
