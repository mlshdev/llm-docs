> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefiltercapabilitiesqueryresponse/promotionalsubactions-5d9c5](https://developer.apple.com/documentation/identitylookup/ilmessagefiltercapabilitiesqueryresponse/promotionalsubactions-5d9c5)

# promotionalSubActions

**Interface language:** Objective-C

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The promotional action the Message Filter app extension recommends that the system perform on the queried message.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSNumber *> * promotionalSubActions;
```

## See Also

### Related Documentation

- [ILMessageFilterSubAction](../ilmessagefiltersubaction.md): Responds to a received message with a filter subaction.

### Setting the Subactions

- [transactionalSubActions](transactionalsubactions-5fmpl.md): The transactional action the Message Filter app extension recommends that the system perform on the queried message.
