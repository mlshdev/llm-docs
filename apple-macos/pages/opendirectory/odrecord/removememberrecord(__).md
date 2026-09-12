> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odrecord/removememberrecord(_:)](https://developer.apple.com/documentation/opendirectory/odrecord/removememberrecord(_:))

# removeMemberRecord(\_:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Removes a record as a member of this group record.

## Declaration

```swift
func removeMemberRecord(_ inRecord: ODRecord!) throws
```

## Parameters

- `inRecord`: The member record.

<a id="Discussion"></a>

## Discussion

This method produces an error if this record is not a group record, or if `inRecord` is not an appropriate type.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Group Records

- [addMemberRecord(\_:)](addmemberrecord%28__%29.md): Adds a member record to this group record.
- [isMemberRecord(\_:)](ismemberrecord%28__%29.md): Determines whether a given record is a member of this group record.

# removeMemberRecord:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Removes a record as a member of this group record.

## Declaration

```objectivec
- (BOOL) removeMemberRecord:(ODRecord *) inRecord error:(NSError **) outError;
```

## Parameters

- `inRecord`: The member record.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `inRecord` is successfully removed from this group record; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method produces an error if this record is not a group record, or if `inRecord` is not an appropriate type.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Group Records

- [addMemberRecord:error:](addmemberrecord%28__%29.md): Adds a member record to this group record.
- [isMemberRecord:error:](ismemberrecord%28__%29.md): Determines whether a given record is a member of this group record.
