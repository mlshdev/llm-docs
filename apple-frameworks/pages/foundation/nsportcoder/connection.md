> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsportcoder/connection

# connection

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

Returns the `NSConnection` object that uses the receiver.

## Declaration

```objectivec
- (NSConnection *) connection;
```

<a id="return-value"></a>

## Return Value

The `NSConnection` object that uses the receiver. In an object’s [encodeWithCoder:](../nscoding/encode%28with_%29.md) method, this is the sending (server) connection. In [initWithCoder:](../nscoding/init%28coder_%29.md) this is the receiving (client) connection.
