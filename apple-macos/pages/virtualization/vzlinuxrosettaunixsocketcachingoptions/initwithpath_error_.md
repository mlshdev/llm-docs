> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzlinuxrosettaunixsocketcachingoptions/initwithpath:error:

# initWithPath:error:

**Interface language:** Objective-C

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates a new Rosetta caching options object for a UNIX domain socket with the path you specify.

## Declaration

```objectivec
- (instancetype) initWithPath:(NSString *) path error:(NSError **) error;
```

## Parameters

- `path`: The path of the UNIX Domain Socket that Rosetta uses.
- `error`: If not `nil`, assigned with the error if the initialization fails.

<a id="Discussion"></a>

## Discussion

You can optionally configure Rosetta to use cached translations from the Rosetta translation daemon communicating through a UNIX domain socket.

If `path` length exceeds [maximumPathLength](maximumpathlength.md) in UTF-8 bytes, the framework returns `nil` and sets the `error` value, if available.

> **Important**

>  The guest operating system needs to have a directory at `path` created in order for translation caching to operate correctly.

## See Also

### Initializers

- [init](init.md): Creates a new Rosetta caching options object for a UNIX domain socket.
