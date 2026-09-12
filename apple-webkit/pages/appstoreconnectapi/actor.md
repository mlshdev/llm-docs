> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/actor](https://developer.apple.com/documentation/appstoreconnectapi/actor)

# Actor

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.4+

An entity in the audit log representing the person, service, or system that performed an action in App Store Connect.

## Declaration

```
object Actor
```

## Properties

- `attributes` — `Actor.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `actors`

## Topics

### Objects

- [Actor.Attributes](actor/attributes-data.dictionary.md): Attributes that describe an actor resource.

## See Also

### Objects

- [ActorResponse](actorresponse.md): A response containing a single audit log actor who performed a tracked action in App Store Connect.
- [ActorsResponse](actorsresponse.md): A response containing a list of audit log actors who performed actions in App Store Connect.
