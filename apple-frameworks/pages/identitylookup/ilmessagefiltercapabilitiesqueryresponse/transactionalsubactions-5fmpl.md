> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefiltercapabilitiesqueryresponse/transactionalsubactions-5fmpl](https://developer.apple.com/documentation/identitylookup/ilmessagefiltercapabilitiesqueryresponse/transactionalsubactions-5fmpl)

# transactionalSubActions

**Interface language:** Objective-C

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The transactional action the Message Filter app extension recommends that the system perform on the queried message.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSNumber *> * transactionalSubActions;
```

## See Also

### Related Documentation

- [ILMessageFilterSubAction](../ilmessagefiltersubaction.md): Responds to a received message with a filter subaction.

### Setting the Subactions

- [promotionalSubActions](promotionalsubactions-5d9c5.md): The promotional action the Message Filter app extension recommends that the system perform on the queried message.
