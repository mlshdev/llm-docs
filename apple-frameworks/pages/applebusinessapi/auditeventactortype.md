> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/auditeventactortype](https://developer.apple.com/documentation/applebusinessapi/auditeventactortype)

# AuditEventActorType

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Type  
**Availability:** Apple Business API 2.4+

Strings that represent the type of entity that performed an action.

## Declaration

```
string AuditEventActorType
```

## Possible Values

- `USER`:
- `API_USER`:
- `SYSTEM`:

<a id="discussion"></a>

## Discussion

- Possible Values

  - USER: Action performed by a user.
  - API_USER: Action performed via API account.
  - SYSTEM: Action performed by the system.
