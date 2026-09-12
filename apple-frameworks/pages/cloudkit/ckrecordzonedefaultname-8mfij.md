> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzonedefaultname-8mfij](https://developer.apple.com/documentation/cloudkit/ckrecordzonedefaultname-8mfij)

# CKRecordZoneDefaultName

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The default record zone’s name.

## Declaration

```objectivec
extern NSString * const CKRecordZoneDefaultName;
```

<a id="discussion"></a>

## Discussion

Use this value when you need to refer to the default zone by name, such as when creating a zone ID. The default zone has no special capabilities.

## See Also

### Getting the Default Record Zone

- [defaultRecordZone](ckrecordzone/default%28%29.md): Returns the default record zone.
