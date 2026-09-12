> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odrecord/addmemberrecord(_:)](https://developer.apple.com/documentation/opendirectory/odrecord/addmemberrecord(_:))

# addMemberRecord(\_:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Adds a member record to this group record.

## Declaration

```swift
func addMemberRecord(_ inRecord: ODRecord!) throws
```

## Parameters

- `inRecord`: The member record to add.

<a id="Discussion"></a>

## Discussion

This method produces an error if this record is not a group record, or if `inRecord` is not an appropriate type.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Group Records

- [isMemberRecord(\_:)](ismemberrecord%28__%29.md): Determines whether a given record is a member of this group record.
- [removeMemberRecord(\_:)](removememberrecord%28__%29.md): Removes a record as a member of this group record.

# addMemberRecord:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Adds a member record to this group record.

## Declaration

```objectivec
- (BOOL) addMemberRecord:(ODRecord *) inRecord error:(NSError **) outError;
```

## Parameters

- `inRecord`: The member record to add.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the member record is successfully added; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method produces an error if this record is not a group record, or if `inRecord` is not an appropriate type.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing Group Records

- [isMemberRecord:error:](ismemberrecord%28__%29.md): Determines whether a given record is a member of this group record.
- [removeMemberRecord:error:](removememberrecord%28__%29.md): Removes a record as a member of this group record.
