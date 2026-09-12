> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctag-c.protocol/available](https://developer.apple.com/documentation/corenfc/nfctag-c.protocol/available)

# available

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether a detected tag is available.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAvailable) BOOL available;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the tag is available in the current reader session. When a tag is removed from an RF field, it becomes unavailable.

## See Also

### Getting Information About a Tag

- [session](session.md): The reader session that provides the tag.
