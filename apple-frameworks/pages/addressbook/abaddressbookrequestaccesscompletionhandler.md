> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbookrequestaccesscompletionhandler](https://developer.apple.com/documentation/addressbook/abaddressbookrequestaccesscompletionhandler)

# ABAddressBookRequestAccessCompletionHandler (Swift)

**Framework:** Address Book  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Definition for a block callback invoked when an access request has completed.

## Declaration

```swift
typealias ABAddressBookRequestAccessCompletionHandler = (Bool, CFError?) -> Void
```

<a id="Discussion"></a>

## Discussion

Address book request access completion handler blocks are used with [ABAddressBookCreateWithOptions(\_:\_:)](abaddressbookcreatewithoptions%28____%29.md). If you had a view controller that wanted to display the count of users with the name “Smith” in the address book, you might implement something like the code shown in the following code listing.

Listing 1. Sample implementation using ABAddressBookRequestAccessCompletionHandler

```objc
@implementation APLViewController
 
- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view
    CFErrorRef myError = NULL;
    ABAddressBookRef myAddressBook = ABAddressBookCreateWithOptions(NULL, &myError);
    APLViewController * __weak weakSelf = self;  // avoid capturing self in the block
    ABAddressBookRequestAccessWithCompletion(myAddressBook,
      ^(bool granted, CFErrorRef error) {
        if (granted) {
            NSArray *theSmiths = CFBridgingRelease(
              ABAddressBookCopyPeopleWithName(myAddressBook,
                CFSTR("Smith")
              )
            );
            weakSelf.numberOfSmiths = [theSmiths count];
        } else {
            // Handle the case of being denied access and/or the error.
        }
        CFRelease(myAddressBook);
    });
}
 
...
 
@end
```

## See Also

### Deprecated

- [ABRecord](abrecord-swift.typealias.md): Deprecated. A reference to an ABRecord object or any of its derivedopaque types.
- [ABExternalChangeCallback](abexternalchangecallback.md): Deprecated. Prototype for a function callback invoked on an address book when the Address Book database is modified by another address book instance.
- [ABMultiValueIdentifier](abmultivalueidentifier.md): Deprecated. Identifies multivalue properties.
- [ABPersonCompositeNameFormat](abpersoncompositenameformat.md): Deprecated. Indicates a person-name display format.
- [ABPersonSortOrdering](abpersonsortordering.md): Deprecated. Indicates a person sort ordering.
- [ABPropertyID](abpropertyid.md): Deprecated. Integer that identifies a record property.
- [ABRecordID](abrecordid.md): Deprecated. Integer that identifies a record.
- [ABRecordType](abrecordtype.md): Deprecated. Integer that identifies a record type.
- [ABSourceType](absourcetype.md): Deprecated. Indicates a source type. See `Source Properties`.

# ABAddressBookRequestAccessCompletionHandler (Objective-C)

**Framework:** Address Book  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Definition for a block callback invoked when an access request has completed.

## Declaration

```objectivec
typedef void (^)(_Bool, struct __CFError *) ABAddressBookRequestAccessCompletionHandler;
```

<a id="Discussion"></a>

## Discussion

Address book request access completion handler blocks are used with [ABAddressBookCreateWithOptions](abaddressbookcreatewithoptions%28____%29.md). If you had a view controller that wanted to display the count of users with the name “Smith” in the address book, you might implement something like the code shown in the following code listing.

Listing 1. Sample implementation using ABAddressBookRequestAccessCompletionHandler

```objc
@implementation APLViewController
 
- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view
    CFErrorRef myError = NULL;
    ABAddressBookRef myAddressBook = ABAddressBookCreateWithOptions(NULL, &myError);
    APLViewController * __weak weakSelf = self;  // avoid capturing self in the block
    ABAddressBookRequestAccessWithCompletion(myAddressBook,
      ^(bool granted, CFErrorRef error) {
        if (granted) {
            NSArray *theSmiths = CFBridgingRelease(
              ABAddressBookCopyPeopleWithName(myAddressBook,
                CFSTR("Smith")
              )
            );
            weakSelf.numberOfSmiths = [theSmiths count];
        } else {
            // Handle the case of being denied access and/or the error.
        }
        CFRelease(myAddressBook);
    });
}
 
...
 
@end
```

## See Also

### Deprecated

- [ABRecordRef](abrecord-swift.typealias.md): Deprecated. A reference to an ABRecord object or any of its derivedopaque types.
- [ABExternalChangeCallback](abexternalchangecallback.md): Deprecated. Prototype for a function callback invoked on an address book when the Address Book database is modified by another address book instance.
- [ABMultiValueIdentifier](abmultivalueidentifier.md): Deprecated. Identifies multivalue properties.
- [ABPersonCompositeNameFormat](abpersoncompositenameformat.md): Deprecated. Indicates a person-name display format.
- [ABPersonSortOrdering](abpersonsortordering.md): Deprecated. Indicates a person sort ordering.
- [ABPropertyID](abpropertyid.md): Deprecated. Integer that identifies a record property.
- [ABRecordID](abrecordid.md): Deprecated. Integer that identifies a record.
- [ABRecordType](abrecordtype.md): Deprecated. Integer that identifies a record type.
- [ABSourceType](absourcetype.md): Deprecated. Indicates a source type. See `Source Properties`.
