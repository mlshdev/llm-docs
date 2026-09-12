> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzone/capabilities-swift.property](https://developer.apple.com/documentation/cloudkit/ckrecordzone/capabilities-swift.property)

# capabilities (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The capabilities that the zone supports.

## Declaration

```swift
var capabilities: CKRecordZone.Capabilities { get }
```

<a id="discussion"></a>

## Discussion

The server determines the capabilities of the zone and sets the value of this property when you save the record zone. Always check this property before performing tasks that require a specific capability.

Default zones don’t support any special capabilities. Custom zones in a private database support the options that [CKRecordZone.Capabilities](capabilities-swift.struct.md) provides.

## See Also

### Getting the Zone Attributes

- [zoneID](zoneid.md): The unique ID of the zone.
- [CKRecordZone.Capabilities](capabilities-swift.struct.md): The capabilities that a record zone supports.

# capabilities (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The capabilities that the zone supports.

## Declaration

```objectivec
@property (assign, readonly) CKRecordZoneCapabilities capabilities;
```

<a id="discussion"></a>

## Discussion

The server determines the capabilities of the zone and sets the value of this property when you save the record zone. Always check this property before performing tasks that require a specific capability.

Default zones don’t support any special capabilities. Custom zones in a private database support the options that [CKRecordZoneCapabilities](capabilities-swift.struct.md) provides.

## See Also

### Getting the Zone Attributes

- [zoneID](zoneid.md): The unique ID of the zone.
- [CKRecordZoneCapabilities](capabilities-swift.struct.md): The capabilities that a record zone supports.
