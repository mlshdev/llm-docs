> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzlinuxrosettaabstractsocketcachingoptions/initwithname:error:](https://developer.apple.com/documentation/virtualization/vzlinuxrosettaabstractsocketcachingoptions/initwithname:error:)

# initWithName:error:

**Interface language:** Objective-C

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Initialize options to set on a Rosetta directory share.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name error:(NSError **) error;
```

## Parameters

- `name`: This is the name of the abstract socket that Rosetta uses.
- `error`: If not `nil`, assigned with the error if the initialization fails.

<a id="Discussion"></a>

## Discussion

The `sockaddr_un` structure in Linux defines the maximum allowed length of `name`.
