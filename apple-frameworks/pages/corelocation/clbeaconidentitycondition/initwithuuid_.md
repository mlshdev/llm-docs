> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeaconidentitycondition/initwithuuid:](https://developer.apple.com/documentation/corelocation/clbeaconidentitycondition/initwithuuid:)

# initWithUUID:

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Creates a new beacon identity condition with the identifier you specify.

## Declaration

```objectivec
- (instancetype) initWithUUID:(NSUUID *) uuid;
```

## Parameters

- `uuid`: A [UUID](uuid.md) to use as the beacon’s identifier.

## See Also

### Creating beacon identity conditions

- [initWithUUID:major:](initwithuuid_major_.md): Creates a new beacon identity condition with the identifier and major value you specify.
- [initWithUUID:major:minor:](initwithuuid_major_minor_.md): Creates a new beacon identity condition with the identifier, and major and minor values you specify.
