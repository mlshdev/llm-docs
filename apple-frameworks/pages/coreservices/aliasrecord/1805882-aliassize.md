> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/aliasrecord/1805882-aliassize](https://developer.apple.com/documentation/coreservices/aliasrecord/1805882-aliassize)

# aliasSize

**Interface language:** Objective-C

**Framework:** Core Services

The size, in bytes, assigned to the alias record at the time of its creation or updating. This is the total size of the record, including the `userType` and `aliasSize` fields, as well as the variable-length data that is private to the Alias Manager.

## See Also

### Fields

- [userType](1805870-usertype.md): A 4-byte field that can contain application-specific data. When an alias record is created, this field contains 0. Your application can use this field for its own purposes.
