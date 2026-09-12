> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/metrics](https://developer.apple.com/documentation/appstoreconnectapi/metrics)

# Metrics

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Analyze data about matchmaking rules.

<a id="overview"></a>

## Overview

Use the Metrics APIs to diagnose performance and other issues with matchmaking rules. For more information, see [Troubleshooting matchmaking rules using metrics](https://developer.apple.com/documentation/gamekit/troubleshooting-matchmaking-rules-using-metrics) and [Testing rule sets with player traffic using metrics](https://developer.apple.com/documentation/gamekit/testing-rule-sets-with-player-traffic-using-metrics).

## Topics

### Getting match request metrics

- [Get Rule-Based Match Requests](get-v1-gamecenterdetails-_id_-metrics-rulebasedmatchmakingrequests.md): Get match requests that use matchmaking rules.
- [Get Classic Match Requests](get-v1-gamecenterdetails-_id_-metrics-classicmatchmakingrequests.md): Get match requests that don’t use matchmaking rules.

### Getting rule results and errors

- [Get boolean rule results](get-v1-gamecentermatchmakingrules-_id_-metrics-matchmakingbooleanruleresults.md): Get the results of a specific matchmaking rule that returns Boolean values.
- [Get Numeric Rule Results](get-v1-gamecentermatchmakingrules-_id_-metrics-matchmakingnumberruleresults.md): Get the results of a specific matchmaking rule that returns numeric values.
- [Get Matchmaking Rule Errors](get-v1-gamecentermatchmakingrules-_id_-metrics-matchmakingruleerrors.md): Get errors that occur for a specific matchmaking rule.

### Getting queue information

- [Get Queue Size](get-v1-gamecentermatchmakingqueues-_id_-metrics-matchmakingqueuesizes.md): Get the time that match requests are in a specific queue.
- [Get Experimental Queue Size](get-v1-gamecentermatchmakingqueues-_id_-metrics-experimentmatchmakingqueuesizes.md): Get the number of match requests that the queue processes using its experimental rule set.
- [Get Match Request Time in Queue](get-v1-gamecentermatchmakingqueues-_id_-metrics-matchmakingrequests.md): Get the match requests that a specific queue processes.
- [Get Experimental Match Request Time in Queue](get-v1-gamecentermatchmakingqueues-_id_-metrics-experimentmatchmakingrequests.md): Get the match requests that a specific queue processes using its experimental rule set.
- [Get Queue Session Information](get-v1-gamecentermatchmakingqueues-_id_-metrics-matchmakingsessions.md): Get session information on a queue.

### Objects

- [GameCenterMatchmakingAppRequestsV1MetricResponse](gamecentermatchmakingapprequestsv1metricresponse.md): The response body for fetching a match request.
- [GameCenterMatchmakingBooleanRuleResultsV1MetricResponse](gamecentermatchmakingbooleanruleresultsv1metricresponse.md): The response body for fetching the results of applying Boolean rules.
- [GameCenterMatchmakingNumberRuleResultsV1MetricResponse](gamecentermatchmakingnumberruleresultsv1metricresponse.md): The response body for fetching the results of applying numeric rules.
- [GameCenterMatchmakingRuleErrorsV1MetricResponse](gamecentermatchmakingruleerrorsv1metricresponse.md): The response body for fetching the rule errors.
- [GameCenterMatchmakingQueueSizesV1MetricResponse](gamecentermatchmakingqueuesizesv1metricresponse.md): The response body for fetching the queue sizes.
- [GameCenterMatchmakingQueueRequestsV1MetricResponse](gamecentermatchmakingqueuerequestsv1metricresponse.md): The response body for match requests in a queue.
- [GameCenterMatchmakingSessionsV1MetricResponse](gamecentermatchmakingsessionsv1metricresponse.md): The response body for information about a successful matchmaking session.

## See Also

### Matchmaking rules

- [Rules](rules.md): Manage the matchmaking rules that Game Center uses to find players.
- [Expressions](expressions.md): Write expressions that query the match requests in a queue to find the best players for a match.
- [Rule sets](rule-sets.md): Manage the rule sets that you add matchmaking rules and teams to.
- [Queues](queues.md): Manage the queues that contain matchmaking rule sets and that you submit match requests to.
- [Teams](teams.md): Manage the teams that you add to matchmaking rule sets.
- [Testing](testing.md): Test matchmaking rules using sample data.
