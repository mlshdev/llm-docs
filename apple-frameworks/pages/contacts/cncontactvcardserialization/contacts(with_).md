> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactvcardserialization/contacts(with:)](https://developer.apple.com/documentation/contacts/cncontactvcardserialization/contacts(with:))

# contacts(with:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the contacts from the vCard data.

## Declaration

```swift
class func contacts(with data: Data) throws -> [CNContact]
```

## Parameters

- `data`: The vCard data representing one or more contacts.

<a id="Return-Value"></a>

## Return Value

An array of contacts.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

> In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and [About Imported Cocoa Error Parameters](https://developer.apple.com/documentation/swift/about-imported-cocoa-error-parameters).

# contactsWithData:error: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns the contacts from the vCard data.

## Declaration

```objectivec
+ (NSArray<CNContact *> *) contactsWithData:(NSData *) data error:(NSError **) error;
```

## Parameters

- `data`: The vCard data representing one or more contacts.
- `error`: Error information.

<a id="Return-Value"></a>

## Return Value

An array of contacts.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

> In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and [About Imported Cocoa Error Parameters](https://developer.apple.com/documentation/swift/about-imported-cocoa-error-parameters).
