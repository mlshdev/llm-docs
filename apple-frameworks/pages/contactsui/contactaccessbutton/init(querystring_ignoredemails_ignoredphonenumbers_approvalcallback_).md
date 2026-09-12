> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/contactaccessbutton/init(querystring:ignoredemails:ignoredphonenumbers:approvalcallback:)](https://developer.apple.com/documentation/contactsui/contactaccessbutton/init(querystring:ignoredemails:ignoredphonenumbers:approvalcallback:))

# init(queryString:ignoredEmails:ignoredPhoneNumbers:approvalCallback:)

**Framework:** Contacts UI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Creates a contact access button to quickly add contacts under limited-access authorization.

## Declaration

```swift
@MainActor @preconcurrency init(queryString query: String, ignoredEmails: Set<String>? = nil, ignoredPhoneNumbers: Set<String>? = nil, approvalCallback: (([String]) -> Void)? = nil)
```

## Parameters

- `query`: A string to match against contacts not yet exposed to the app. You typically get this value from a search UI that your app presents, like a text field.
- `ignoredEmails`: A set of email addresses, as string values. The search omits contacts matching `query` that also match any email address in this set.
- `ignoredPhoneNumbers`: A set of phone numbers, as string values. The search omits contacts matching `query` that also match any phone number in this set.
- `approvalCallback`: A closure invoked when a person taps the button and adds one or more contacts to the app. The parameter to the closure is an array of contact identifiers, as strings.

<a id="discussion"></a>

## Discussion

This button uses the `query` string to match contacts that the person hasn’t yet exposed to your app. If a single contact matches the search criteria, the button presents that contact and adds it to the limited-access set when tapped. If multiple contacts match, tapping the button navigates to another view where the person can choose contacts to add.
